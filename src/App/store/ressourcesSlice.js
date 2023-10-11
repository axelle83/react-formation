import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { REST_ADR, RESSOURCES_URL} from '../config/constante'
const initialState = {images:JSON.parse('[{"id": 0,"titre": "react\'n roll","url": "https://t4.ftcdn.net/jpg/02/24/11/57/240_F_224115780_2ssvcCoTfQrx68Qsl5NxtVIDFWKtAgq2.jpg","w": 543,"h": 240},{"id": 1,"titre": "deformed","url": "https://wallpapers.com/images/featured/r8l2gifvpdd0kt25.jpg","w": 1125,"h": 900},{"id": 2,"titre": "Not work","url": "https://t3.ftcdn.net/jpg/00/08/59/86/240_F_8598647_6ULL8YFqpJoX6XCuFCVKsWRf1QP1CeK8.jpg","w": 336,"h": 240},{"id": 3,"titre": "Wait long time","url": "https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3756616.jpg&fm=jpg","w": 4067,"h": 6100},{"id": 4,"titre": "old dog","url": "https://i.insider.com/5e74de0b235c1801f042b048?width=750&format=jpeg&auto=webp","w": 750,"h": 562}]')}

const ressourcesSlice = createSlice({
  name: "ressources",
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase('ressources/loadImages/fulfilled',(state,action)=>{
      state.images.splice(0);
      state.images.push(...action.payload)
    });
    builder.addCase('ressources/loadImages/rejected',()=>{console.log('erreur')});
  }
});

export const loadImages=createAsyncThunk('ressources/loadImages', async()=>{
  const primage=await fetch(`${REST_ADR}${RESSOURCES_URL.images}`);
  return await primage.json();
})

// export const {} = ressourcesSlice.actions

export default ressourcesSlice.reducer