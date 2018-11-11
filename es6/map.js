import { masinos } from './arrays';

masinos.map((masina) => masina.marke);
masinos.filter((masina) => masina.kaina < 2000);
masinos.map((masina) => masina.kaina).reduce((kainuSuma, kaina) => kainuSuma + kaina);
