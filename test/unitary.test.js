import { validerIdentifiants } from '../utils/validation.js';

describe('', () => {
  it('Should return true for correct identify', () => {
    expect(validerIdentifiants('gloria@example.com', 'secret123')).toBe(true);
  });

  it('should return false if the mail is empty', () => {
    expect(validerIdentifiants('', 'secret123')).toBe(false);
  });

  it('Should false if the password is too short', () => {
    expect(validerIdentifiants('gloria@example.com', '123')).toBe(false);
  });

  it('Should false if the mail is invalid', () => {
    expect(validerIdentifiants('gloriaexample.com', 'secret123')).toBe(false);
  });
});










