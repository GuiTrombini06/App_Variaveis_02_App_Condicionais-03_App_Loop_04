import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  let ArrayPersonagem = ["Kael, Guerreiro da Luz", "Lyra, da Lâmina de Prata", "Zaros, o Sábio", "Althea, a Devota", "Gromm, o Protetor", "Finnian, o Olho-de-Águia", "Balthazar, o Obscuro"];
  let ArrayClasse = ["Guerreiro", "Guerreira", "Mago", "Clérigo", "Guerreiro", "Arqueiro", "Mago"];
  let ArrayNivel = ["28", "32", "42", "25", "8", "21", "38"];
  let ArrayCor = ["#e74c3c", "#e74c3c", "#9b59b6", "#3498db", "#e74c3c", "#2ecc71", "#9b59b6"];
  let ArrayIcones = [require("./img/Sword.png"), require("./img/Sword.png"), require("./img/Magic.png"), require("./img/Clerigo.png"), require("./img/Sword.png"), require("./img/Arrow.png"), require("./img/Magic.png")];
  let ArrayXP = ["90%", "45%", "10%", "80%", "30%", "65%", "55%"];
  let elemento = null;
  let i = 0;

  while (i < ArrayPersonagem.length) {
    elemento = (
      <>
        {elemento}

        <View id='conteiner'style={{ flexDirection: 'row', backgroundColor: '#2c3e50', marginVertical: 10, padding: 20, borderRadius: 20, alignItems: 'center',borderWidth: 2,borderColor: ArrayCor[i]}}>
          <View id='nivel' style={{ width: 55, height: 55, borderRadius: 27, backgroundColor: '#1a1a1a', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: ArrayCor[i] }}>
            <Text style={{ color: ArrayCor[i], fontSize: 10, fontWeight: 'bold' }}>NÍVEL</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{ArrayNivel[i]}</Text>
          </View>
          <View id='personagem' style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>{ArrayPersonagem[i]}</Text>
            <Text style={{ fontSize: 14, color: ArrayCor[i], fontWeight: 'bold' }}>{ArrayClasse[i]}</Text>
            <View id='XP' style={{ height: 6, width: '80%', backgroundColor: '#1a1a1a', marginTop: 10, borderRadius: 3 }}>
                <View style={{ height: '100%', width: ArrayXP[i], backgroundColor: ArrayCor[i], borderRadius: 3 }} />
            </View>
          </View>
          <Image id='imgClasse' source={ArrayIcones[i]} style={{ width: 40, height: 40}} />
        </View>
      </>
    );
    i++;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <View style={{ height: 170, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 3, borderBottomColor: '#f1c40f' }}>
        <Text style={{ color: '#f1c40f', fontSize: 32, fontWeight: 'bold' }}>GUILDA DOS HERÓIS</Text>
        <Text style={{ color: '#ecf0f1', fontSize: 14 }}>MEMBROS EQUIPADOS</Text>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
        <View style={{ marginTop: 10, marginBottom: 30 }}>{elemento}</View>
      </ScrollView>
      <View id='Rodapé' style={{backgroundColor: '#1a1a1a', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',borderTopWidth: 2,borderTopColor: '#f1c40f', paddingBottom: 5, height:80}}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Battle.png')} style={{ width: 35, height: 35 }}  />
          <Text style={{ color: '#7f8c8d', fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>ARENA</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Oficina.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ color: '#7f8c8d', fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>OFICINA</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Guilda.png')} style={{ width: 40, height: 40}}/>
          <Text style={{ color: '#f1c40f', fontSize: 13, fontWeight: 'bold', marginTop: 5 }}>MEMBROS</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Coins.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ color: '#7f8c8d', fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>TESOURO</Text>
        </View>
      </View>
    </View>
  );
}

export default App;