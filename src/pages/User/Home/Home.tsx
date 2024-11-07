import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostService from "@/services/PostService";
import PostInterface from "@/types/PostInterface";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const postService = new PostService();

import image1 from "../../../Assets/image1.png";
import image2 from "../../../Assets/image2.png";
import image3 from "../../../Assets/image3.png";
import image4 from "../../../Assets/image4.png";
import image5 from "../../../Assets/image5.png";
import fallback from "../../../Assets/fallback.png";

const Home = () => {
  const images = [image1, image2, image3, image4, image5];
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await postService.loadPostList();
      setPosts(response);
    }

    fetchPosts();
  }, []);

  return (
    <main className="space-y-4">
      <h1 className="text-slate-800 text-3xl font-bold">Novidades</h1>
      <section className="py-4 sm:columns-2 gap-4 space-y-4">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <Card className="break-inside-avoid" key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {i < 5 ? (
                  <div
                    className="w-full h-[300px] rounded-lg"
                    style={{
                      background: `url(${images[i]}) no-repeat center center / cover`,
                    }}
                  ></div>
                ) : (
                  <div
                    className="w-full h-[300px] rounded-lg"
                    style={{
                      background: `url(${fallback}) no-repeat center center / cover`,
                    }}
                  ></div>
                )}
              </CardContent>
              {post.link && (
                <CardFooter>
                  <Link to={post.link} className="block" target="_blank">
                    <Button type="button" variant={"outline"}>
                      Ver publicação
                    </Button>
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))
        ) : (
          <p>Nenhum post encontrado</p>
        )}
      </section>
    </main>
  );
};

export default Home;
