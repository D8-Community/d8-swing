import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

import { db } from "~/db.server";

async function getLoaderData(blogId: string) {
    const blog = await db.blog.findUnique({
      where: {
        id: blogId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        Category: true,
      },
    });
  
    return blog;
}
export const loader = async ({ params }: LoaderArgs) => {
    return json({});
};
  
export function BlogPost() {
    const blog = useLoaderData<typeof loader>();
  return (
    <>
        <section className="page-header-section style-1">
            <div className="container">
                <div className="page-header-content">
                    <div className="page-header-inner">
                        <div className="page-title">
                            <h2>D8me Blog</h2>
                        </div>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Blog</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}