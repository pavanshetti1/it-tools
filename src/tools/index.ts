import { tool as regexMemo } from './regex-memo';
import { tool as passwordStrengthAnalyser } from './password-strength-analyser';
import { tool as httpStatusCodes } from './http-status-codes';
import { tool as caseConverter } from './case-converter';
import { tool as colorConverter } from './color-converter';
import { tool as percentageCalculator } from './percentage-calculator';
import { tool as gitMemo } from './git-memo';
import { tool as hashText } from './hash-text';
import { tool as mathEvaluator } from './math-evaluator';
import { tool as temperatureConverter } from './temperature-converter';
import { tool as textStatistics } from './text-statistics';
import { tool as tokenGenerator } from './token-generator';
import type { ToolCategory } from './tools.types';
import { tool as jsonDiff } from './json-diff';
import { tool as chronoMeter } from './chronometer';
import { tool as encryption } from './encryption';
import { tool as stringObuscator } from './string-obfuscator';

export const toolsByCategory: ToolCategory[] = [
  {
    name: 'Crypto',
    components: [tokenGenerator, hashText, passwordStrengthAnalyser, encryption],
  },
  {
    name: 'Converter',
    components: [
      colorConverter,
      caseConverter,
    ],
  },
  {
    name: 'Web',
    components: [
      httpStatusCodes,
      jsonDiff,
    ],
  },
  {
    name: 'Development',
    components: [
      gitMemo,
      regexMemo,
    ],
  },
  {
    name: 'Math',
    components: [mathEvaluator, percentageCalculator],
  },
  {
    name: 'Measurement',
    components: [temperatureConverter, chronoMeter],
  },
  {
    name: 'Text',
    components: [
      textStatistics,
      stringObuscator,
    ],
  },
];

export const tools = toolsByCategory.flatMap(({ components }) => components);
export const toolsWithCategory = toolsByCategory.flatMap(({ components, name }) =>
  components.map(tool => ({ category: name, ...tool })),
);
