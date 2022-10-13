puts "Seeding Data..."


p1 = Property.create(address: "18420 Hastings Way, Porter Ranch, CA 91326", image_url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80", bedrooms: "15 bd", bathrooms: "16 ba", price: 250)
p2 = Property.create(address: "1445 President St, Brooklyn, NY 11213", image_url: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", bedrooms: "10 bd", bathrooms: "12 ba", price: 350)
p3 = Property.create(address: "233 Eastern Ave SE, Grand Rapids, MI 49503", image_url: "https://media.istockphoto.com/photos/modern-house-with-pool-by-the-sea-picture-id1221865609?k=20&m=1221865609&s=170667a&w=0&h=jmJ2aWkR_9Bp6ovM4atA9kUTwCSwRPpaj9Dirvd-Qfo=", bedrooms: "8 bd", bathrooms: "9 ba", price: 325)
p4 = Property.create(address: "30 Shay Pl, Tequesta, FL 33469", image_url: "https://s.yimg.com/ny/api/res/1.2/0XnTl5PRDOuoplfH3GKlzA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/uu/api/res/1.2/.wKBXaOwi8V4jMVnAMUtCA--~B/aD00MzM7dz03NzA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/propertyguru.sg.news/1e59276bc6a7cd660c97952d36bcbb32", bedrooms: "9 bd", bathrooms: "11 ba", price: 250)
p5 = Property.create(address: "1905 Mirabeau St, Austin, TX 78727", image_url: "https://greenopalproperties.com/wp-content/uploads/2020/06/exterior_5-Photo-592x444.jpg", bedrooms: "7 bd", bathrooms: "9 ba", price: 225)
p6 = Property.create(address: "101 Jungle Rd, Palm Beach, FL 33480", image_url: "https://www.gannett-cdn.com/presto/2021/01/11/NPBD/2732f93f-e683-41da-8a77-35e11c50bb8c-PBN_535_N_County_Rd_Pool_SmRes.jpg?crop=1315,740,x0,y0&width=660&height=372&format=pjpg&auto=webp", bedrooms: "18 bd", bathrooms: "19 ba", price: 450)


o1 = Owner.create(name: "Barrett Hiltabrand", email: "BarrettHiltabrand@gmail.com", phone_number: "713-516-5979", image_url: "https://pbs.twimg.com/profile_images/1425997536578449408/wqa0JqsM_400x400.jpg")
o2 = Owner.create(name: "Leonardo DiCaprio", email: "LeoDiCap@yahoo.com", phone_number: "314-266-2989", image_url: "https://i.guim.co.uk/img/media/1d25bbd83b0a0adcd4ee2750794fe8e5071c6a1d/0_44_7499_4500/master/7499.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=86de0a4fc2e9d334fb0de4a81746ac6e")
o3 = Owner.create(name: "Michael Fassbender", email: "MikeyFass@gmail.com", phone_number: "334-657-8799", image_url: "https://img-20.ccm2.net/vPeWDVpoamovB0WQHqs9EEJhOL8=/c280686cad164683bccfcc37062d1291/ccm-faq/1073119.jpg")
o4 = Owner.create(name: "Rachel McAdams", email: "RachMcAdams@yahoo.com", phone_number: "614-244-2556", image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Frachel-mcadams-4075.php&psig=AOvVaw3_d-QOjzuF0OiTnMJtUiBX&ust=1665703135209000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCnqO_p2_oCFQAAAAAdAAAAABAU")
o5 = Owner.create(name: "Scarlett Johansson", email: "ScarlettJo@yahoo.com", phone_number: "874-546-2489", image_url: "https://conteudo.imguol.com.br/c/entretenimento/bf/2020/02/10/scarlett-johansson-1581352338657_v2_1x1.jpg")
o6 = Owner.create(name: "Jennifer Lopez", email: "JLo@gmail.com", phone_number: "576-290-0049", image_url: "https://hips.hearstapps.com/hmg-prod/images/how-to-get-brows-like-jlo-1659479638.jpg?crop=0.5xw:1xh;center,top&resize=640:*")
o7 = Owner.create(name: "Ben Affleck", email: "BennyAfs@yahoo.com", phone_number: "326-367-1876", image_url: "https://cdn-3.expansion.mx/dims4/default/d0eca40/2147483647/strip/true/crop/1000x1488+0+0/resize/1800x2678!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F98%2F62%2Feeb9ffc4403fb0042192686ad0eb%2Fben-affleck.jpg")


l1 = Listing.create(property_id: p1.id, owner_id: o6.id)
l2 = Listing.create(property_id: p6.id, owner_id: o1.id)
l3 = Listing.create(property_id: p2.id, owner_id: o3.id)
l4 = Listing.create(property_id: p3.id, owner_id: o2.id)
l5 = Listing.create(property_id: p4.id, owner_id: o4.id)
l6 = Listing.create(property_id: p5.id, owner_id: o5.id)
l7 = Listing.create(property_id: p1.id, owner_id: o7.id)


u1 = User.create(username: "Barrett", password: "12345", admin?: true)
u2 = User.create(username: "Simon", password: "12345", admin?: false)
u3 = User.create(username: "Erick", password: "12345", admin?: false)
u4 = User.create(username: "Nick", password: "12345", admin?: false)
u5 = User.create(username: "John", password: "12345", admin?: false)
u6 = User.create(username: "Matt", password: "12345", admin?: false)
u7 = User.create(username: "Michael", password: "12345", admin?: false)


r1 = Review.create(review: "Barrett's place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. His place is great, very clean and has everything you need. He was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend it.", property_id: p6.id, user_id: u2.id)
r2 = Review.create(review: "Leo is incredible. He was very accommodating and very quick to respond with any questions. He is also flexible with check-in and check-out time, which was extremely helpful. The place was very clean and had all of the necessities for a few night stay.", property_id: p3.id, user_id: u3.id)
r3 = Review.create(review: "Jennifer's place is a quiet, clean, spacious and calming place. It is very near the Beach and close to all the lovely restaurants and bars of the area. But you can nott hear the noise of the streets in the house. The whole place made us feel at ease. Jennifer was very nice, easy to talk to and very friendly when she welcomed us. I would definitely come again!", property_id: p1.id, user_id: u4.id)
r4 = Review.create(review: "I found this place to be very clean, comfortable, and perfectly sized for one to two people. The bathroom and shower was excellent. You could tell that Rachel made sure that the house is very clean. Furthermore, they clearly explained the area, and also arranged a taxi for me from the apartment to the airport after I checked out. For 250 a night, I honestly think this is a bargain. I am looking forward to staying here again one day.", property_id: p4.id, user_id: u5.id)
r5 = Review.create(review: "Scarlett's place was fantastic. Very clean and stylish place with everything you needed. In a great location, right near heaps of great places to eat! Scarlett was very accommodating and helpful letting us drop our bags off early and checking in on us regularly to make sure we had everything we needed. Would definitely stay here again!", property_id: p5.id, user_id: u6.id)
r6 = Review.create(review: "Michael was a superb host. They gave us clear instructions for getting to the house, and left a helpful collection of notes for us to use. The house is stylish and located in a fantastic area, within easy walking distance of great cafes and shops.", property_id: p2.id, user_id: u7.id)
r7 = Review.create(review: "The space was absolutely what was promised. The bed was super comfy and clean. And Ben was an excellent host. Helped me out with getting my bearings in the neighborhood. I will definitely be looking to stay the next time I come to Los Angeles.", property_id: p1.id, user_id: u2.id)


puts "Finished Seeding Data"