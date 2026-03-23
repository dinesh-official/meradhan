"use client";
<<<<<<< HEAD
import { useKycDataProvider } from "../../_context/KycDataProvider";
=======
>>>>>>> 9dd9dbd (Initial commit)
import { useKycDataStorage } from "../../_store/useKycDataStorage";
import IdentityValidationAadharInfo from "./1_panAndAadhar/IdentityValidationAadharInfo";
import IdentityValidationForm from "./1_panAndAadhar/IdentityValidationForm";
import IdentityValidationPanInfo from "./1_panAndAadhar/IdentityValidationPanInfo";
<<<<<<< HEAD
=======
import AdharInfoForm from "./1_panAndAadhar/AdharInfoForm";
import KraInfoStep from "./2_kraInfo/KraInfoStep";
>>>>>>> 9dd9dbd (Initial commit)
import IdentityValidationCaptureSelfie from "./2_selfie/IdentityValidationCaptureSelfie";
import IdentityValidationSelfiePreview from "./2_selfie/IdentityValidationSelfiePreview";
import IdentityValidationAddSign from "./3_sign/IdentityValidationAddSign";
import IdentityValidationPreviewSign from "./3_sign/IdentityValidationPreviewSign";
<<<<<<< HEAD
import AdharInfoForm from "./1_panAndAadhar/AdharInfoForm";
=======
>>>>>>> 9dd9dbd (Initial commit)

function IdentityValidationStep() {
  const { state } = useKycDataStorage();
  const Steps = [
    <IdentityValidationForm key={0} />,
<<<<<<< HEAD
    <IdentityValidationPanInfo key={1} />,
    <AdharInfoForm key={2} />,
    <IdentityValidationAadharInfo key={3} />,
    <IdentityValidationCaptureSelfie key={4} />,
    <IdentityValidationSelfiePreview key={5} />,
    <IdentityValidationAddSign key={6} />,
    <IdentityValidationPreviewSign key={7} />,
=======
    <KraInfoStep key={1} />,
    <IdentityValidationPanInfo key={2} />,
    <AdharInfoForm key={3} />,
    <IdentityValidationAadharInfo key={4} />,
    <IdentityValidationCaptureSelfie key={5} />,
    <IdentityValidationSelfiePreview key={6} />,
    <IdentityValidationAddSign key={7} />,
    <IdentityValidationPreviewSign key={8} />,
>>>>>>> 9dd9dbd (Initial commit)
  ];
  return <>{Steps[state.stepIndex]}</>;
}

export default IdentityValidationStep;
