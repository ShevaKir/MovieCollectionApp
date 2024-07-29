import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform 0 minutes to "0h 0m"', () => {
    expect(pipe.transform(0)).toBe('0h 0m');
  });

  it('should transform 59 minutes to "0h 59m"', () => {
    expect(pipe.transform(59)).toBe('0h 59m');
  });

  it('should transform 60 minutes to "1h 0m"', () => {
    expect(pipe.transform(60)).toBe('1h 0m');
  });

  it('should transform 120 minutes to "2h 0m"', () => {
    expect(pipe.transform(120)).toBe('2h 0m');
  });

  it('should transform 125 minutes to "2h 5m"', () => {
    expect(pipe.transform(125)).toBe('2h 5m');
  });

  it('should transform 61 minutes to "1h 1m"', () => {
    expect(pipe.transform(61)).toBe('1h 1m');
  });
});
