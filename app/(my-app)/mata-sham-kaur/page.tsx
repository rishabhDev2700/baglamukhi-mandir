"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Marquee from '@/components/marquee';

export default function MataShamKaurPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            className='w-full h-full object-cover' 
            src="/hero.jpg" 
            width={1920} 
            height={1080} 
            alt="Mata Sham Kaur & Sabal Singh Bawri" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='font-main font-bold text-4xl md:text-6xl text-yellow-400 drop-shadow-lg'
          >
            Mata Sham Kaur Mohini & Baba Sabal Singh Bawri
          </motion.h1>
        </div>
        <Marquee text="ॐ ह्लीं बगलामुखी सर्व दुष्टानां वाचं मुखं पदं स्तम्भय जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥" />
      </div>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 border-b-4 border-yellow-500 pb-2 inline-block">
              MATA SHAM KAUR MOHINI (माता श्याम कौर मोहिनी)
            </h2>
            
            <div className="prose prose-lg text-gray-800 space-y-6">
              <p className="leading-relaxed">
                तंत्र की सबसे बड़ी मोहिनी माता श्याम कौर मोहिनी हैं। इनके माध्यम से वशीकरण बड़े तीव्र गति से होता है और इसकी कोई काट नहीं होती है। 
                क्योंकि श्यामा कौर मोहिनी मोहन की देवी हैं। षट्कर्म अलग-अलग हैं: मारण, मोहन, उच्चाटन, वशीकरण संबंध है। 
                जो मोहन की देवी हैं वह वशीकरण का कार्य करती हैं।
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 italic text-gray-700">
                Mata Sham Kaur Mohini is considered the supreme goddess of fascination (Mohini) in Tantra. 
                Vashikaran through her is extremely powerful and swift, with no known remedy. 
                She is the goddess of attraction (Mohan) and handles tasks related to Vashikaran.
              </div>

              <h3 className="text-2xl font-bold text-red-500 mt-12">HISTORY (ITIHAAS)</h3>
              <p>
                श्याम कौर मोहिनी के बारे में जानना है तो नरकासुर को जानना होगा। नरकासुर से श्याम कौर का सीधा संबंध है। 
                नरकासुर, जो पृथ्वी का पुत्र था, उसे विष्णु का भी पुत्र माना गया था। भगवान विष्णु की कृपा से ही वह राजा बना था। 
                उसके बाद वह दुगामासुर और बाणासुर के संपर्क में आया और उसके अंदर राक्षसी गुण पैदा हो गए। 
                उस गुण को प्रबल करने के लिए, अपनी इच्छाओं को पूरा करने के लिए नरकासुर ने ब्रह्मदेव की कठिन साधना की।
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 border-b-4 border-yellow-500 pb-2 inline-block">
              BABA SABAL SINGH BAWRI (बाबा सबल सिंह बावरी)
            </h2>
            
            <div className="prose prose-lg text-gray-800 space-y-6">
              <p>
                बाबा सबल सिंह बावरी राजपूत बावरी समाज के एक ऐतिहासिक और वीर पुरुष माने जाते हैं, जिनका जन्म राजस्थान के खरखडी गांव में राजा हेमराज के घर हुआ था। 
                उन्हें इस्माइल जोगी का वरदान प्राप्त था और माना जाता है कि वह अपार शक्तियों के स्वामी थे, जिन्होंने मुगलों के अत्याचार के खिलाफ संघर्ष किया और सोनीपत (मुरथल) में बलिदान दिया।
              </p>

              <h3 className="text-2xl font-bold text-red-500 mt-8">सबल सिंह बावरी का इतिहास और मान्यताएं:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-xl text-red-700 mb-2">जन्म की कथा</h4>
                  <p className="text-sm text-gray-700">
                    राजा हेमराज और माता कपूरी की कोई संतान न होने पर उन्होंने इस्माइल जोगी की सेवा की। 
                    जोगी ने दो पुत्रों का वरदान दिया, लेकिन एक पुत्र को धूणे (अग्नि स्थान) में सौंपने की शर्त रखी। 
                    बड़ा बेटा हरिसिंह था, और छोटे पुत्र को धूणे में चढ़ाया गया, जो बाद में 'सबल सिंह बावरी' के नाम से जाना गया।
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-xl text-red-700 mb-2">वीरता और संघर्ष</h4>
                  <p className="text-sm text-gray-700">
                    मुगलों के शासनकाल के दौरान, सबल सिंह बावरी ने अपनी बहादुरी से मुगलों को लोहे के चने चबवाए। 
                    उन्होंने के सरमल, अजीतमल, जाफरमल और हरिसिंह बावरी के साथ मिलकर धर्म और समाज की रक्षा की।
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-xl text-red-700 mb-2">शहादत</h4>
                  <p className="text-sm text-gray-700">
                    सोनीपत के पास मुगलों द्वारा उन्हें घेर लिया गया और सिर कलम कर दिए गए। 
                    मान्यता है कि सिर कटने के बाद भी वे लड़ते रहे।
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-xl text-red-700 mb-2">धार्मिक महत्व</h4>
                  <p className="text-sm text-gray-700">
                    सबल सिंह बावरी को कई लोग पीर के रूप में भी पूजते हैं। सोनीपत (मुरथल) के पास उनका प्रमुख स्थान है। 
                    वे बावरिया समुदाय में एक पूजनीय देवता और लोक देवता के रूप में पूजे जाते हैं।
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
