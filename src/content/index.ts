const images = $("img");
images.each(function(this: HTMLElement) {
  console.log(this);
  const ele = this as HTMLImageElement;
  ele.src =
    "https://tempim-1256796114.cos-website.ap-shanghai.myqcloud.com/placeholder/123x456";
});
