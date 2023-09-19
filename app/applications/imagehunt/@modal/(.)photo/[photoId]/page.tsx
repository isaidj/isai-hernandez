import Modal from "@/app/components/Modal/Modal";
import ModalGallery from "@/app/components/Modal/ModalGallery";

const PhotoModal = ({ params }: { params: { photoId: string } }) => {
  return (
    <Modal>
      <h1>Photo Modal</h1>
    </Modal>
  );
  // return <ModalGallery image={params.photoId} isOpen={true} />;
};

export default PhotoModal;
