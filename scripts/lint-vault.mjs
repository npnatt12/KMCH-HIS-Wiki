#!/usr/bin/env node
/**
 * Vault linting utilities including PII pattern detection for future OCR scanning.
 * PII_PATTERNS are a scaffold — not yet wired to runtime logic, but ready for
 * integration with codex's image-map captions once that feature lands.
 */

export const PII_PATTERNS = {
  thaiNationalId: /\b\d-?\d{4}-?\d{5}-?\d{2}-?\d\b/,
  hn: /\bHN[\s\-:]*\d{6,10}\b/i,
  phone: /\b0\d{1,2}[-\s]?\d{3}[-\s]?\d{4}\b/,
};
