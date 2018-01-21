export default function getOneRandomOption(options) {
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber]
}

