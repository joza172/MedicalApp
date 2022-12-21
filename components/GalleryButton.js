import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native'
import AcidoEritroSvg from '../resources/svg-s/cells/AcidoEritroSvg'
import AtipLimfoSvg from '../resources/svg-s/cells/AtipLimfoSvg'
import BazoEritroSvg from '../resources/svg-s/cells/BazoEritroSvg'
import EritrocitSvg from '../resources/svg-s/cells/EritrocitSvg'
import LimfoblastSvg from '../resources/svg-s/cells/LimfoblastSvg'
import LimfocitSvg from '../resources/svg-s/cells/LimfocitSvg'
import MegakarioblastSvg from '../resources/svg-s/cells/MegakarioblastSvg'
import MegakariocitSvg from '../resources/svg-s/cells/MegakariocitSvg'
import MetamijelocitSvg from '../resources/svg-s/cells/MetamijelocitSvg'
import MijeloblastSvg from '../resources/svg-s/cells/MijeloblastSvg'
import MijelocitSvg from '../resources/svg-s/cells/MijelocitSvg'
import MonoblastSvg from '../resources/svg-s/cells/MonoblastSvg'
import MonocitSvg from '../resources/svg-s/cells/MonocitSvg'
import NesegNeutroSvg from '../resources/svg-s/cells/NesegNeutroSvg'
import PlazmaSvg from '../resources/svg-s/cells/PlazmaSvg'
import PolikroEritroSvg from '../resources/svg-s/cells/PolikroEritroSvg'
import ProeritroSvg from '../resources/svg-s/cells/ProeritroSvg'
import PromegaSvg from '../resources/svg-s/cells/PromegaSvg'
import PromijeloSvg from '../resources/svg-s/cells/PromijeloSvg'
import PromonocitSvg from '../resources/svg-s/cells/PromonocitSvg'
import ReaktLimfoSvg from '../resources/svg-s/cells/ReaktLimfoSvg'
import RetikuloSvg from '../resources/svg-s/cells/RetikuloSvg'
import SegBazoSvg from '../resources/svg-s/cells/SegBazoSvg'
import SegEoziSvg from '../resources/svg-s/cells/SegEoziSvg'
import SegNeutroSvg from '../resources/svg-s/cells/SegNeutroSvg'
import VlasLimfoSvg from '../resources/svg-s/cells/VlasLimfoSvg'

const height = Dimensions.get('window').height
const GalleryButton = (props) => {
    
    function renderSwitch(param) {
        switch(param) {
            case 'Eritrocit':
                return (<EritrocitSvg size={height * 0.1} style={styles.svg}/>);   
            case 'Proeritroblast':
                return (<ProeritroSvg size={height * 0.1} style={styles.svg}/>);
            case 'Bazofilni_eritroblast':
                return (<BazoEritroSvg size={height * 0.1} style={styles.svg}/>);
            case 'Polikromatofilni_eritroblast':
                return (<PolikroEritroSvg size={height * 0.1} style={styles.svg}/>);
            case 'Acidofilni_eritroblast':
                return (<AcidoEritroSvg size={height * 0.1} style={styles.svg}/>);
            case 'Retikulocit':
                return (<RetikuloSvg size={height * 0.1} style={styles.svg}/>);
            case 'Mijeloblast':
                return (<MijeloblastSvg size={height * 0.1} style={styles.svg}/>);
            case 'Promijelocit':
                return (<PromijeloSvg size={height * 0.1} style={styles.svg}/>);
            case 'Mijelocit':
                return (<MijelocitSvg size={height * 0.1} style={styles.svg}/>);
            case 'Metamijelocit':
                return (<MetamijelocitSvg size={height * 0.1} style={styles.svg}/>);
            case 'Nesegmentirani_neutrofil':
                return (<NesegNeutroSvg size={height * 0.1} style={styles.svg}/>);
            case 'Segmentirani_neutrofil':
                return (<SegNeutroSvg size={height * 0.1} style={styles.svg}/>);
            case 'Segmentirani_eozinofil':
                return (<SegEoziSvg size={height * 0.1} style={styles.svg}/>);
            case 'Segmentirani_bazofil':
                return (<SegBazoSvg size={height * 0.1} style={styles.svg}/>);
            case 'Limfoblast':
                return (<LimfoblastSvg size={height * 0.1} style={styles.svg}/>);
            case 'Limfocit':
                return (<LimfocitSvg size={height * 0.1} style={styles.svg}/>);
            case 'Reaktivni_limfocit':
                return (<ReaktLimfoSvg size={height * 0.1} style={styles.svg}/>);
            case 'Atipični_limfocit':
                return (<AtipLimfoSvg size={height * 0.1} style={styles.svg}/>);
            case 'Plazma_stanica':
                return (<PlazmaSvg size={height * 0.1} style={styles.svg}/>);
            case 'Vlasasti_limfocit':
                return (<VlasLimfoSvg size={height * 0.1} style={styles.svg}/>);
            case 'Monoblast':
                return (<MonoblastSvg size={height * 0.1} style={styles.svg}/>);
            case 'Promonocit':
                return (<PromonocitSvg size={height * 0.1} style={styles.svg}/>);
            case 'Monocit':
                return (<MonocitSvg size={height * 0.1} style={styles.svg}/>);
            case 'Megakarioblast':
                return (<MegakarioblastSvg size={height * 0.1} style={styles.svg}/>);
            case 'Promegakariocit':
                return (<PromegaSvg size={height * 0.1} style={styles.svg}/>);
            case 'Megakariocit':
                return (<MegakariocitSvg size={height * 0.1} style={styles.svg}/>);
      }

    };
    return (
        <Pressable style={styles.rectanglePressable} 
            onPress={() => {
                    props.handleClick(props.value)
                }
            }>
            {renderSwitch(props.value)}
            <Text style={[styles.text]}>{props.value.replace('_', ' ')}</Text>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    svg: {
        position: 'absolute',
        left: '0%',
        top: '0%'
    },
    rectanglePressable: {
        marginHorizontal: '5%',
        height: height * 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 180,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        elevation: 10,
        marginVertical: height * 0.01,
    },
    text: {
        fontWeight: '600',
        marginHorizontal: height * 0.1,
        color: '#9c53d4',
        fontSize: height * 20 / 844
    }
})
export default GalleryButton;