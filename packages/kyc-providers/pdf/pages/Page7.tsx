<<<<<<< HEAD
import { Text, View } from "@react-pdf/renderer";
import { tw } from "../MdPdf";

function Page7({ }: { ePan: string }) {
  return (
    <View style={tw(`px-4 h-[70%] d-flex justify-center items-center`)}>
      {/* <Image
=======
import { Image, Text, View } from "@react-pdf/renderer";
import { tw } from "../MdPdf";

function Page7({ ePan }: { ePan?: string }) {
  return (
    <View style={tw(`px-4 h-[70%] d-flex justify-center items-center`)}>
      {ePan && <Image
>>>>>>> 9dd9dbd (Initial commit)
        style={tw(` mt-10 h-auto`)}
        source={{
          uri: `data:image/png;base64,${ePan}`,
        }}
<<<<<<< HEAD
      /> */}
      <Text style={tw(`text-center`)} >PAN details verified successfully through ITD</Text>
=======
      />}
      {!ePan && <Text style={tw(`text-center`)} >PAN details verified successfully through ITD</Text>}
>>>>>>> 9dd9dbd (Initial commit)
    </View>
  );
}

export default Page7;
