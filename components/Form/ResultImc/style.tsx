import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   contextImc:{
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
   },

   numberImc:{
    fontSize: 48,
    color: "#5e17eb",
    fontWeight: "bold"
   },

   information: {
    fontSize: 18,
    color: "#5e17eb",
    fontWeight: "bold"
   },

   boxShareButton:{
      width: "100%",
      alignItems: "center",
      marginBottom: 10,
   },

   shared:{
      backgroundColor: "#1877f2",
      borderRadius: 50,
      paddingBottom: 5,
      paddingTop: 5,
   },
   
   sharedText:{
      color: "#ffffff",
      fontWeight: "bold",
      paddingHorizontal: 30,
   }
})

export default styles