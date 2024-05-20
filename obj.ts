const car: { type: string; year: number } = {
  type: "Toyota",
  year: 2000,
};

const carNull: { type?: string; year?: number } = {};

interface Car {
  type: string;
  model: string;
  year: number;
}

const car2: Car = {
  type: "Toyota",
  year: 2000,
  model: "Corolla",
};
