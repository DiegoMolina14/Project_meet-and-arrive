import styled from 'styled-components';
const Frame = styled.iframe`
    width: 100%;
    height: 100%;
    margin-bottom: -7px;

`;
function GumMap({ops}) {
    switch (ops) {
        case "1":
           return(
           <>
           <Frame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d122259.7983098406!2d-93.12957117323866!3d16.74586675643635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sestaciones%20de%20taxi!5e0!3m2!1ses!2smx!4v1679661984400!5m2!1ses!2smx"> </Frame>
           </>
           ); 
           break;
        case "2":
            return(
           <>
           <Frame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3916969.54638545!2d-94.49083815413456!3d16.517736691793246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sestaci%C3%B3n%20de%20tren%20en%20Chiapas!5e0!3m2!1ses!2smx!4v1679799030408!5m2!1ses!2smx"> </Frame>
           </>
           );
           break 
        case "3":
            return(
                
            <Frame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d488973.67685888807!2d-93.75033783831479!3d16.771358775522526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1saeropuertos%20en%20chiapas%20m%C3%A9xico!5e0!3m2!1ses!2smx!4v1679799784883!5m2!1ses!2smx"> </Frame>    
            );
            break;
        case "4":
            return(
                <Frame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d122259.23911453612!2d-93.21283247006251!3d16.7467376956341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sestaciones%20de%20autobuses!5e0!3m2!1ses!2smx!4v1679800918436!5m2!1ses!2smx"></Frame>
            );
            break; 
        case "5":
            return(
                <Frame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d244539.1836844275!2d-93.26166470953595!3d16.730606321191555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgasolinera%20en%20chiapas%20mexico!5e0!3m2!1ses!2smx!4v1679801476205!5m2!1ses!2smx" ></Frame>

            );
            break;  
        case "6":
            return(
                <Frame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d122259.42922180801!2d-93.21248867267597!3d16.74644161104048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospital!5e0!3m2!1ses!2smx!4v1679801641358!5m2!1ses!2smx" ></Frame>
            )  
        default:
            break;
    }
    return(
        <>
        <Frame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d122259.7983098406!2d-93.12957117323866!3d16.74586675643635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sestaciones%20de%20taxi!5e0!3m2!1ses!2smx!4v1679661984400!5m2!1ses!2smx"> </Frame>
        </>
    );
}
export default GumMap;