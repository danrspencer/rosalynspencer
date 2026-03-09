/**
 * Cross-site URL configuration.
 *
 * While both sides live on the same domain these default to relative paths.
 * When the retreat moves to its own domain, set the environment variables:
 *   PUBLIC_AUTHOR_URL=https://rosalynspencer.co.uk
 *   PUBLIC_RETREAT_URL=https://longthwaiteretreat.co.uk
 */
export const AUTHOR_URL  = import.meta.env.PUBLIC_AUTHOR_URL  ?? '';
export const RETREAT_URL = import.meta.env.PUBLIC_RETREAT_URL ?? '/retreat';
