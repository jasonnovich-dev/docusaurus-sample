# Configuring Rate Limits

## Overview

Rate limiting helps protect the API from being overwhelmed by too many requests. Each API key has its own limit, which is enforced on a per-minute basis.

## How to configure a rate limit

1. Navigate to the API Keys section of your dashboard.
2. Select the key whose limit you want to change.
3. Enter a new value in the "Requests per minute" field. The value must be a positive integer. There's no upper bound enforced by the UI, but values above 10,000 require approval from your account manager.
4. Select **Save**. The new limit takes effect immediately, and no restart or redeployment is needed.

## Reference

| Field | Constraint |
|---|---|
| Requests per minute | Positive integer; no UI-enforced upper bound; values above 10,000 require account manager approval |

## Troubleshooting: Unexpected 429 errors

If you're seeing 429 errors more often than expected, check whether your traffic is bursty. The limiter uses a fixed window, so a large number of requests arriving in the same second can exhaust the limit even if your average rate is well under the configured value.

It's also worth checking if multiple services share the same API key, since the limit applies to the key, not to any individual service using it.