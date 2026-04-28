import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../slug';

test('slugify lowercases', () => {
  assert.equal(slugify('OPD Patient Status'), 'opd-patient-status');
});

test('slugify replaces spaces with hyphens', () => {
  assert.equal(slugify('A B C'), 'a-b-c');
});

test('slugify strips trailing .md', () => {
  assert.equal(slugify('OPD Patient Status.md'), 'opd-patient-status');
});

test('slugify keeps Thai characters as-is', () => {
  assert.equal(slugify('การจ่ายยา'), 'การจ่ายยา');
});

test('slugify collapses repeated whitespace', () => {
  assert.equal(slugify('A  B   C'), 'a-b-c');
});

test('slugify strips ASCII punctuation', () => {
  assert.equal(slugify('Step 1: Begin'), 'step-1-begin');
});

test('slugify strips parentheses', () => {
  assert.equal(slugify('Future Orders (คำสั่งล่วงหน้า)'), 'future-orders-คำสั่งล่วงหน้า');
});

test('slugify preserves Thai vowels and tone marks', () => {
  assert.equal(slugify('การเปลี่ยนสถานะ'), 'การเปลี่ยนสถานะ');
});

test('slugify handles colon followed by space', () => {
  assert.equal(slugify('วิธี 1: เมนูหลัก'), 'วิธี-1-เมนูหลัก');
});
