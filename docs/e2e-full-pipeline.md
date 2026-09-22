# Rotating API Keys

## How to Rotate an API Key

1. Go to Settings > API Keys and select "Generate New Key."
2. Update your services one at a time to use the new key, testing each one before moving to the next.
3. Once every service is confirmed working on the new key, go back to Settings > API Keys and select "Revoke" next to the old key.

## Key Format

- Keys are prefixed with `sk_live_` for production or `sk_test_` for test mode
- Keys are 48 characters long including the prefix
- Keys never expire on their own; they remain valid until explicitly revoked

## About Key Rotation

API keys should be rotated periodically to limit the damage if one is ever leaked or compromised.

We support having two active keys at once specifically so you can rotate without any downtime. This matters because if you only had one key, revoking it before your new one is deployed everywhere would break your integration mid-rotation.

Both your old and new key work simultaneously once a new key is generated. This overlap period is intentional and there's no time limit on it. Take as long as you need to update every service, script, and CI job that uses the old key before revoking it.

:::warning
Revocation is immediate and cannot be undone. The old key stops working the instant you select it, so only revoke after you've fully verified the rotation.
:::

We recommend rotating keys on a fixed schedule, like every 90 days, rather than only after a suspected leak, since a fixed schedule limits how long a leaked-but-undetected key could remain usable.