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

const Home = () => {
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
          posts.map((post) => (
            <Card className="break-inside-avoid" key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[300px] rounded-lg"></div>
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
