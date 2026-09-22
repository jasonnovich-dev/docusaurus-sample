# Rotating API Keys

## How to Rotate an API Key

1. Go to Settings > API Keys and select **Generate New Key**. Both your old and new key will now work simultaneously.
2. Update your services one at a time to use the new key, testing each one before moving to the next.
3. Once every service is confirmed working on the new key, go back to Settings > API Keys and select **Revoke** next to the old key.

## Key Format

- Keys are prefixed with `sk_live_` for production or `sk_test_` for test mode
- Keys are 48 characters long including the prefix
- Keys never expire on their own; they remain valid until explicitly revoked

## Why Rotate API Keys

Rotate API keys periodically to limit the damage if one is ever leaked or compromised.

:::info
We support having two active keys at once specifically so you can rotate without downtime. If you only had one key, revoking it before your new one is deployed everywhere would break your integration mid-rotation.
:::

:::tip
This overlap period is intentional, and there's no time limit on it. Take as long as you need to update every service, script, and CI job that uses the old key before revoking it.
:::

:::warning
Revocation is immediate and can't be undone. The old key stops working the instant you select it, so only revoke a key after you've fully verified the rotation.
:::

We recommend rotating keys on a fixed schedule, such as every 90 days, rather than only after a suspected leak, since a fixed schedule limits how long a leaked but undetected key could remain usable.