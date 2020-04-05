from PIL import Image
import glob

img_path = '/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/backend/app/image (4).jpeg'

im = Image.open(img_path)
print( '{}'.format(im.format))
print('size: {}'.format(im.size))
# print('image mode: {}'.format(im.size))
# # im.show()

image_list = []
resized_images = []   
  
for filename in glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/backend/app/*.png'):
    print(filename)
    img = Image.open(filename)
    image_list.append(img)

for image in image_list:
    # image.show()
    image = image.resize((28,28))
    resized_images.append(image)

for pic in resized_images:
    pic.show()
   
for (i,new) in enumerate(resized_images):
    new.save('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/picture/',i+1,'.png'))