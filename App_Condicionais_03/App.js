import React from "react";
import { View, Text, Image } from "react-native";

function App() {
  let CorFundo = "#e0d8d8a1";
  let CorTextoSecundario = "gray";
  let CorTextoTerciario = "white";
  let CorMembros = "black";
  let TamanhoImagem = 20;
  let TamanhoImagemPersonagem = 140;
  let TamanhoClasse = 40;
  let BordaRadiusClasse = 20;
  let DistanciaClasse = 5;

  let OPCAO = "Tela1";

  if (OPCAO == "Tela1")
    return (
      <View id="Pesquisa" style={{ flex: 1, backgroundColor: CorFundo, padding: 30 }}>
        <View style={{ justifyContent: "center" }}>
          <View style={{ height: 40, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: 20, borderColor: "black", borderWidth: 1}}>
            <Image source={require("./img/Search.png")} style={{ width: TamanhoImagem, height: TamanhoImagem}}/>
            <Text style={{ color: CorTextoSecundario, fontSize: 20 }}>Pesquisar Guilda</Text>
          </View>
        </View>
        <View id='EscolhaDeClasse' style={{ flexDirection: "row", justifyContent: "center", padding: 15}}>
          <View style={{ flexDirection: "row", height: TamanhoClasse, width: "32%", backgroundColor: "#2A9D8F", borderRadius: BordaRadiusClasse, marginRight: DistanciaClasse, alignItems: "center", justifyContent: "center" }}>
            <Image source={require("./img/Sword.png")} style={{ width: TamanhoImagem, height: TamanhoImagem}}/>
            <Text style={{ color: CorTextoTerciario }}>Guerreiros</Text>
          </View>
          <View style={{ flexDirection: "row", height: TamanhoClasse, width: "30%", backgroundColor: "#8E7CC3", borderRadius: BordaRadiusClasse, marginRight: DistanciaClasse, alignItems: "center", justifyContent: "center" }}>
            <Image source={require("./img/Magic.png")} style={{ width: TamanhoImagem, height: TamanhoImagem}} />
            <Text style={{ color: CorTextoTerciario }}>Magos</Text>
          </View>
          <View style={{ flexDirection: "row", height: TamanhoClasse, width: "30%", backgroundColor: "#8E7CC3", borderRadius: BordaRadiusClasse, marginRight: DistanciaClasse, alignItems: "center", justifyContent: "center" }}>
            <Image source={require("./img/Arrow.png")} style={{ width: TamanhoImagem, height: TamanhoImagem}} />
            <Text style={{ color: CorTextoTerciario }}>Arqueiros</Text>
          </View>
          <View style={{ flexDirection: "row", height: TamanhoClasse, width: "17%", backgroundColor: "#8E7CC3", borderRadius: BordaRadiusClasse, marginRight: DistanciaClasse, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: CorTextoTerciario }}>Outros</Text>
          </View>
        </View>
        <View id='Mensagens'style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between"}}>
          <Text style={{ color: CorMembros, fontSize: 25 }}>24 Membros</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: CorMembros, fontSize: 25, marginRight: 10 }}>Novos</Text>
            <Image source={require("./img/Menu.png")} style={{ width: TamanhoImagem, height: TamanhoImagem }}/>
          </View>
        </View>
        <View id="CardPersonagem1" style={{ marginTop: 50, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
            <Image id="FtPersonagenHomem" source={require("./img/AvatarHomem.png")} style={{ width: TamanhoImagemPersonagem, height: TamanhoImagemPersonagem, marginRight: 15, borderRadius: 25, borderColor: 'black', borderWidth:1}}/>
            <View id='Nome_Nive_HP1'style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>Kael, Guerreiro da Luz </Text>
              <Text style={{ fontSize: 16, color: "#666", marginBottom: 10 }}>Nível 28</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>HP: 30%</Text>
              <View style={{ height: 10, width: "100%", backgroundColor: "#E0E0E0", borderRadius: 5, borderColor: 'black', borderWidth:1}}>
                <View style={{ height: "100%", width: "30%", backgroundColor: "#db2727", borderRadius: 5}}></View>
              </View>
            </View>
          </View>
          <View id="CardPersonagem2"style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
            <Image id="FtPersonagenMulher" source={require("./img/AvatarMulher.png")} style={{ width: TamanhoImagemPersonagem, height: TamanhoImagemPersonagem, marginRight: 15, borderRadius: 25, borderColor: 'black', borderWidth:1}}/>
            <View id='Nome_Nive_HP2' style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>Lyra, Guerreira da Lâmina de Prata</Text>
              <Text style={{ fontSize: 16, color: "#666", marginBottom: 10 }}>Nível 32</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>HP: 65%</Text>
              <View style={{ height: 10, width: "100%", backgroundColor: "#E0E0E0", borderRadius: 5, borderColor: 'black', borderWidth:1}}>
                <View style={{ height: "100%", width: "65%", backgroundColor: "#2ECC71", borderRadius: 5}}></View>
              </View>
            </View>
          </View>
        </View>
        <View id='CardMissão' style={{ marginTop: 10, backgroundColor: '#FFF', borderRadius: 20, padding: 15, borderColor: 'black', borderWidth:1}}>
          <Image id='FtTemplo'source={require('./img/Templo.png')} style={{ width: '100%', height: 200, borderRadius: 15, marginBottom: 15 }} />
          <View id='Informações' style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, color: '#666' }}>Missão Principal:</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Templo Esquecido do Dragão</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Progresso: 4/5</Text>
          </View>
        </View>
      </View>
    );
  else
    return (
      <View id="FotoTemploFundo"style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ height: 300, width: '100%' }}>
          <Image source={require('./img/Templo.png')} style={{ width: '100%', height: '100%' }}/>
          <View style={{ position: 'absolute', top: 50, left: 20, right: 20, flexDirection: 'row'}}>
            <Image source={require("./img/Menu.png")} style={{ width: 35, height: 20 }}/>
          </View>
        </View>
        <View id="CardBranco" style={{ backgroundColor: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: -40, padding: 30, flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1A3B5D', textAlign: 'center' }}>Templo Esquecido do Dragão</Text>
          <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginTop: 15, lineHeight: 26 }}>Dizem que nas profundezas deste templo reside o espírito de um dragão ancestral. Sua guilda precisa recuperar o artefato prateado antes que os orcs o encontrem!</Text>
          <View id="Recompensa" style={{ width: '80%', borderWidth: 2, borderColor: '#BDC3C7', borderRadius: 15, padding: 15, alignItems: 'center',  marginTop: 30 }}>
            <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#2ECC71' }}>5,000 XP</Text>
            <Text style={{ fontSize: 16, color: '#666', fontWeight: 'bold' }}>RECOMPENSA</Text>
          </View>
          <View id="Equipamento" style={{ width: '100%', height: 100, borderWidth: 2, borderColor: '#BDC3C7', borderRadius: 20, padding: 20, marginTop: 30 }}>
            <Text style={{ color: '#7F8C8D', fontSize: 14, fontWeight: 'bold' }}>INSIRA O EQUIPAMENTO NECESSÁRIO</Text>
          </View>
          <View id="Iniciar" style={{ backgroundColor: '#10B981', width: '100%', padding: 20, borderRadius: 35, alignItems: 'center', marginTop: 40 }}>
            <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}>INICIAR MISSÃO</Text>
          </View>
        </View>
      </View>
   );
}
export default App;
