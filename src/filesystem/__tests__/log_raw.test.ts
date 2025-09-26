import { LogRawNotificationSchema } from '../index.js';

describe('LogRawNotificationSchema', () => {
  it('accepts valid text payload', () => {
    const parsed = LogRawNotificationSchema.parse({ method: 'log/raw', params: { text: 'hello world' } });
    expect(parsed).toBeDefined();
    expect(parsed.params.text).toBe('hello world');
  });

  it('rejects missing text', () => {
    expect(() => LogRawNotificationSchema.parse({ method: 'log/raw', params: {} })).toThrow();
  });

  it('rejects wrong method', () => {
    expect(() => LogRawNotificationSchema.parse({ method: 'wrong/method', params: { text: 'x' } })).toThrow();
  });
});
