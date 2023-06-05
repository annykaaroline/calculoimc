export type Level = {
   title: String;
   color: String;
   icon: 'down' |'up';
   imc: number[];
   yourImc?: number;
}

export const levels: Level[] = [
    {title:' Abaixo do peso', color:'#d5e843', icon:'down', imc:[0,18.5]},
    {title:'Normal', color:'#2fe03e', icon:'up', imc:[18.6,24.9]},
    {title:'SobrePeso', color:'#ed723e', icon:'down', imc:[25, 30]},
    {title:'Obesidade', color:'#ff0d00', icon:'down', imc:[30.1, 99]}
 ];

 export const calculeteImc = (altura:number, peso:number) => {
   const imc = (peso/ (altura * altura));

   for (let i in levels) {
      if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
         levels[i].yourImc = imc;
         return levels[i]
      }
   }
    return null;
 }