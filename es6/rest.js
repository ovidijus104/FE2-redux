import { namas } from './desctructuring';

const { ismatavimai, ismatavimaiSkladuko } = namas;

const naujasObjektas = {
  ...ismatavimai,
  ...ismatavimaiSkladuko,
  ilgis: 14,
};

const funkcija = (...rest) => {
  console.log(rest); // rest = [ 1, 2, 3, 4 ]
};

funkcija(1, 2, 3, 4);
