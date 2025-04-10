"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import Image from 'next/image';
import Head from 'next/head';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      // 模拟提交
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "提交成功",
        description: "我们将尽快处理您的请求",
      });
    } catch (error) {
      toast({
        title: "提交失败",
        description: "请稍后重试",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      <Head>
        <title>AI-Powered Ghibli Style Filter | Transform Your Photos</title>
        <meta name="description" content="Transform your everyday photos into stunning Ghibli-style artwork with our advanced AI filter. Perfect for portraits, outdoor scenes, and group photos." />
        <meta name="keywords" content="Ghibli style, AI photo filter, photo transformation, Ghibli artwork, AI-powered filter" />
        <meta name="author" content="Ghibli-GPT" />
        <meta property="og:title" content="AI-Powered Ghibli Style Filter | Transform Your Photos" />
        <meta property="og:description" content="Transform your everyday photos into stunning Ghibli-style artwork with our advanced AI filter. Perfect for portraits, outdoor scenes, and group photos." />
        <meta property="og:image" content="/Distracted Boyfriend Ghibli Art.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Ghibli Style Filter | Transform Your Photos" />
        <meta name="twitter:description" content="Transform your everyday photos into stunning Ghibli-style artwork with our advanced AI filter." />
        <meta name="twitter:image" content="/Distracted Boyfriend Ghibli Art.jpg" />
      </Head>

      <header className="text-center py-16 space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          AI-Powered Ghibli Style Filter for Your Photos
        </h1>
        <p className="text-gray-600 mt-4">
          Transform your everyday photos into stunning Ghibli-style artwork with our advanced AI filter.
        </p>
      </header>

      <section className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">See the Magic in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <figure className="bg-white shadow-md rounded-lg p-4">
            <Image src="/Distracted Boyfriend Ghibli Art.jpg" alt="Distracted Boyfriend Ghibli Art" className="rounded-lg" width={500} height={500} />
            <figcaption className="text-gray-600 mt-2">Distracted Boyfriend Ghibli Art</figcaption>
          </figure>
          <figure className="bg-white shadow-md rounded-lg p-4">
            <Image src="/Elon Musk Smoking Ghibli Art.jpg" alt="Elon Musk Smoking Ghibli Art" className="rounded-lg" width={500} height={500} />
            <figcaption className="text-gray-600 mt-2">Elon Musk Smoking Ghibli Art</figcaption>
          </figure>
          <figure className="bg-white shadow-md rounded-lg p-4">
            <Image src="/Ghibli Style Art.jpg" alt="Ghibli Style Art" className="rounded-lg" width={500} height={500} />
            <figcaption className="text-gray-600 mt-2">Ghibli Style Art</figcaption>
          </figure>
          <figure className="bg-white shadow-md rounded-lg p-4">
            <Image src="/Distracted Boyfriend Ghibli Art (1).jpg" alt="Distracted Boyfriend Ghibli Art Variant" className="rounded-lg" width={500} height={500} />
            <figcaption className="text-gray-600 mt-2">Distracted Boyfriend Ghibli Art Variant</figcaption>
          </figure>
        </div>
      </section>

      <main className="w-full max-w-5xl px-4 py-12">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-gray-800">创建您的吉卜力风格作品</h2>
            <p className="text-gray-600">填写以下信息开始创作</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">邮箱地址</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">补充描述（可选）</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="描述您想要的风格和效果..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="images">上传图片（最多3张）</Label>
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="cursor-pointer"
                />
                {images.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="w-20 h-20 object-cover rounded-lg"
                          width={80}
                          height={80}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isLoading ? "处理中..." : "立即支付"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold text-lg text-gray-800">Instant Transformation</h3>
              <p className="text-gray-600">Transform your photos into Ghibli-style artwork in seconds.</p>
            </article>
            <article className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold text-lg text-gray-800">High-Quality Results</h3>
              <p className="text-gray-600">Get stunning, high-resolution Ghibli-style artwork.</p>
            </article>
            <article className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold text-lg text-gray-800">No Signup Required</h3>
              <p className="text-gray-600">Start creating instantly without creating an account.</p>
            </article>
            <article className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold text-lg text-gray-800">Multiple Styles</h3>
              <p className="text-gray-600">Choose from various Ghibli-inspired styles for your photos.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-100 mt-12">
        <p className="text-gray-600">© 2025 Ghibli-GPT. All rights reserved.</p>
      </footer>
    </div>
  );
}
