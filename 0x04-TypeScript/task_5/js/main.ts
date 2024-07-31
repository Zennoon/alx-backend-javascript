const brand = Symbol('brand');

interface MajorCredits {
  credits: number,
  [brand]: 'MajorCredits'
}

interface MinorCredits {
  credits: number,
  [brand]: 'MinorCredits'
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    [brand]: 'MajorCredits'
  }

  return (sum);
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    [brand]: 'MinorCredits'
  }

  return (sum);
}
