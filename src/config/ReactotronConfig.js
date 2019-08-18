import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  // adiciona a propriedade "tron" no método global "console"
  // assim será possível por exemplo, usar console.tron.log()
  // em qualquer parte da aplicação
  console.tron = tron;

  // aqui seta para sempre que a aplicação receber um refresh,
  // limpar a console do reactotron
  tron.clear();
}
