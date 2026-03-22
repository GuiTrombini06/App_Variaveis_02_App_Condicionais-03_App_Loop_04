import react from "react";
import {Text, View, Image} from 'react-native';

export default function App(){
  let CorFundo1 = 'gray';
  let CorFundo2 = 'white';
  let CorBorda = 'black';
  let CorTextoTopo = 'white';
  let CorTitulo = 'blue';
  let Negrito = 'bold';
  let Horizontal = 'row';
  let Vertical = 'column';
  let Espacamento = 30;
  let Espacamento2 = 25;
  let BordaRedonda = 50;
  let TamanhoBorda = 2;
  let TamanhoTexto2 = 14;
  let TamanhoTitulo = 30;
  let imgCasa = require("./img/Casa.png");
  let imgMenu = require("./img/Menu.png");
  let imgBasquete = require("./img/Basquete.png");
  let imgFutebol = require("./img/Futebol.png");
  let imgSkate = require("./img/Skate.png");
  let imgVolei = require("./img/Volei.png");
  let imgMusculacao = require("./img/Musculacao.png");
  let imgJogadorBasquete = require("./img/JogadorBasquete.jpg");
  let imgJogadorFutebol = require("./img/JogadorFutebol.jpg");
  let imgJogadorVolei = require("./img/JogadorVolei.jpg");
  let imgBarraStatus1 = require("./img/BarraStatus1.jpg");
  let imgBarraStatus2 = require("./img/BarraStatus2.jpg");
  let TamanhoImagem1 = 35;
  let TamanhoImagem2 = 60;
  let TamanhoImagem3 = '100%';
  let TamanhoImagem4 = 30;
  let TamanhoImagem5 = 130;
  let TamanhoImagem6 = 90;


  return(
    <View id = 'Tudo' style={{backgroundColor: CorFundo1, flex:1}}>
      <View id = 'Topo' style = {{backgroundColor: CorFundo1, flex:1, padding: Espacamento}}>
        <View id = 'Casa e Menu' style={{flexDirection: Horizontal, marginBottom: Espacamento, justifyContent: 'space-between'}}>
          <Image source={imgCasa} style={{width: TamanhoImagem1, height: TamanhoImagem1}} />
          <Image source={imgMenu} style={{width: TamanhoImagem1, height: TamanhoImagem1}} />
        </View>
        <View style = {{flexDirection: Vertical,flex:1, marginBottom: Espacamento2}}>
          <Text id = 'Texto App' style = {{color: CorTextoTopo, fontSize: TamanhoTexto2}}>Acompanhe seus treinos, evolua seu desempenho e alcance seus objetivos com facilidade. Receba notificações sobre partidas, estatísticas em tempo real e dicas personalizadas para melhorar sua performance esportiva.</Text>
        </View>
      </View>
      <View id = 'Segunda Metade' style = {{backgroundColor: CorFundo2, flex:5, borderTopLeftRadius: BordaRedonda, borderTopRightRadius: BordaRedonda, padding: Espacamento}}>
        <View style = {{flexDirection: Vertical, flex:1}}>
          <Text id = 'Titulo1' style = {{color: CorTitulo, fontSize: TamanhoTitulo, marginBottom: Espacamento2, fontWeight: Negrito}}>Sports Hub</Text>
          <View id = 'Seleção Esportes' style = {{ flexDirection: Horizontal, justifyContent: 'space-between'}}>
            <Image source={imgBasquete} style={{width: TamanhoImagem2, height: TamanhoImagem2}} />
            <Image source={imgFutebol} style={{width: TamanhoImagem2, height: TamanhoImagem2}} />
            <Image source={imgVolei} style={{width: TamanhoImagem2, height: TamanhoImagem2}} />
            <Image source={imgSkate} style={{width: TamanhoImagem2, height: TamanhoImagem2}} />
            <Image source={imgMusculacao} style={{width: TamanhoImagem2, height: TamanhoImagem2}} />
          </View>
          <Text id = 'Titulo2' style = {{color: CorTitulo, fontSize: TamanhoTitulo, marginTop: Espacamento2, fontWeight: Negrito}}>Training Stats</Text>
        </View>  
        <View id = 'Verificação do Treino' style = {{flexDirection: Vertical, flex:2 , justifyContent: 'center', alignItens: 'center'}}>
          <View style = {{flexDirection: Horizontal, flex:1}}>
            <Image source={imgJogadorBasquete} style={{width: TamanhoImagem5, height: TamanhoImagem6, borderColor: CorBorda, borderWidth: TamanhoBorda, borderRadius: BordaRedonda}} />
            <Text style = {{fontSize: TamanhoTexto2, marginLeft: Espacamento2}}>Sessão de 50 min concluída com intensidade moderada. Aproveitamento de arremessos em 76% e boa evolução no controle de bola e tomada de decisão.</Text>
          </View>
          <Image source={imgBarraStatus1} style={{width: TamanhoImagem3, height: TamanhoImagem4, marginTop: Espacamento2}} />
          <View style = {{flexDirection: Horizontal, flex:1, marginTop: Espacamento2}}>
            <Image source={imgJogadorFutebol} style={{width: TamanhoImagem5, height: TamanhoImagem6, borderColor: CorBorda, borderWidth: TamanhoBorda, borderRadius: BordaRedonda}} />
            <Text style = {{fontSize: TamanhoTexto2, marginLeft: Espacamento2}}>Sessão finalizada com intensidade abaixo do esperado. Baixo aproveitamento em finalizações (32%) e dificuldade na transição defensiva.</Text>
          </View>
          <Image source={imgBarraStatus2} style={{width: TamanhoImagem3, height: TamanhoImagem4, marginTop: Espacamento2}} />
          <View style = {{flexDirection: Horizontal, flex:1, marginTop: Espacamento2}}>
            <Image source={imgJogadorVolei} style={{width: TamanhoImagem5, height: TamanhoImagem6, borderColor: CorBorda, borderWidth: TamanhoBorda, borderRadius: BordaRedonda}} />
            <Text style = {{fontSize: TamanhoTexto2, marginLeft: Espacamento2}}>Treino de 60 min concluído com foco em fundamentos. Precisão de recepção em 82% e evolução consistente no saque. Bom desempenho em movimentação</Text>
          </View>
        </View>
      </View>
    </View>
  );
}