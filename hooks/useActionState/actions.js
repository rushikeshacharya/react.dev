"use server";

export default function increment(prevState, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prevState + 1);
    }, 3000);
  });
}
