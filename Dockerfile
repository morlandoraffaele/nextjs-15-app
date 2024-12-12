# Use the official Bun image as base
FROM oven/bun:1.0.35-slim as base

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
FROM base as deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Build the application
FROM deps as builder
COPY . .
RUN bun run build

# Production image
FROM base as runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["bun", "server.js"] 