import BaseImage from "@/components/ui/BaseImage";

export default function DropzoneFile({
  onChange,
  areaClassName = "",
  curImage,
  removeImage,
}) {
  return curImage ? (
    <BaseImage
      src={curImage}
      alt={"picture"}
      heigth="300"
      className="aspect-square rounded-md overflow-hidden"
    >
      <div
        onClick={() => removeImage(null)}
        className="bg-danger-900 absolute top-2 right-2 rounded-md"
      >
        <BaseImage
          src={"/assets/icons/white-close.svg"}
          alt={"close icon"}
          heigth="25"
        />
      </div>
    </BaseImage>
  ) : (
    <div className={`dropzone-area ${areaClassName}`}>
      <div className="file-upload-icon"></div>

      <BaseImage
        src={"/assets/icons/pic.svg"}
        alt={"picture icon"}
        heigth="36"
      />

      <span className="text-[10px]">افزودن کاور ترک</span>
      <input
        onChange={onChange}
        type="file"
        required
        id="upload-file"
        name="uploaded-file"
        accept="image/*"
      />
      <p className="message"></p>
    </div>
  );
}
