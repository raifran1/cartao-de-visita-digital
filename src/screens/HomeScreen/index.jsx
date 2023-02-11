import {View, Image, Text, Linking} from "react-native";
import {homePageStyle} from "./style";
import {fontFamily, tSizes} from "../../../assets/css/main/general";
import {IconButton} from "react-native-paper";
import {colors} from "../../../assets/css/main/colors";
import QRCode from 'react-native-qrcode-svg';
import {LinearGradient} from "expo-linear-gradient";
import Foreground from "../../components/foreground";
import {useState} from "react";


export default function Index(){
  const [link, setLinks] = useState({url: 'https://raifranlucas.dev', title: 'raifranlucas.dev', icon: 'link'});

  return (
    <View style={{flex: 1, backgroundColor: 'rgb(255,255,255)'}}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.5)', 'transparent', 'transparent', 'transparent', 'transparent', 'rgba(0,0,0,0.5)']}
        style={homePageStyle.linearGradient}
      >
      {/*  FOREGROUND  */}
        <View style={homePageStyle.foreground}>
          <Foreground/>
        </View>

        <View style={homePageStyle.content}>
        {/* Foto de perfil */}
          <View style={homePageStyle.viewImage}>
            <Image source={require('../../../assets/eu.jpeg')} style={homePageStyle.image}/>
          </View>

          {/* Nome e profissao */}
          <View style={homePageStyle.viewInfo}>
            <Text style={homePageStyle.infoName}>
              Raifran Lucas
            </Text>

            <Text style={homePageStyle.infoCargo}>
              Fullstack Developer
            </Text>
          </View>

          {/*  BUTTONS  */}
          <View style={homePageStyle.viewButtons}>
            <View style={homePageStyle.viewButtonsContent}>

              <IconButton
                icon="facebook"
                color={'#000'}
                size={35}
                style={homePageStyle.buttons}
                onPress={() => setLinks({url: 'https://facebook.com/raifranlucas.dev', title: 'raifranlucas.dev', icon: 'facebook'})}
              />

              <IconButton
                icon="instagram"
                color={colors.black}
                size={35}
                style={homePageStyle.buttons}
                onPress={() => setLinks({url: 'https://www.instagram.com/raifranlucas.dev/', title: '@raifranlucas.dev', icon: 'instagram'})}
              />

              <IconButton
                icon="whatsapp"
                color={colors.black}
                size={35}
                style={homePageStyle.buttons}
                onPress={() => setLinks({url: 'https://wa.me/message/7QRAKLB4BXDHC1', title: '(86) 99823-6024', icon: 'whatsapp'})}
              />

              <IconButton
                icon="link"
                color={colors.black}
                size={35}
                style={homePageStyle.buttons}
                onPress={() => setLinks({url: 'https://raifranlucas.dev', title: 'raifranlucas.dev', icon: 'link'})}
              />

              <IconButton
                icon="linkedin"
                color={colors.black}
                size={35}
                style={homePageStyle.buttons}
                onPress={() => setLinks({url: 'https://www.linkedin.com/in/raifranlucas/', title: 'LinkedIn', icon: 'linkedin'})}
              />
            </View>
          </View>

        {/*  QR CODE  */}
          <View style={{alignSelf: 'center'}}>
            <View style={homePageStyle.viewQrCode}>
              <QRCode value={link.url} size={180}  />
            </View>

            <View style={homePageStyle.viewTextQrCode}>
              <IconButton
                icon={link.icon}
                color={colors.black}
                size={35}
              />
              <Text style={homePageStyle.textQrCode}>{link.title}</Text>
            </View>
          </View>
        </View>

        <View style={homePageStyle.foreground}>
          <Foreground/>
        </View>
      </LinearGradient>
    </View>
  )
}