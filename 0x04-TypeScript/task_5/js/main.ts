const brand = Symbol('brand');

export interface MajorCredits {
  credits: number,
  [brand]: 'MajorCredits'
}

export interface MinorCredits {
  credits: number,
  [brand]: 'MinorCredits'
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    [brand]: 'MajorCredits'
  }

  return (sum);
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    [brand]: 'MinorCredits'
  }

  return (sum);
}
