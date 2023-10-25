import { For } from "solid-js";
import { Card } from '../Card';


export const RecentPosts = (props: {
    posts: any[];
}) => {
    const { posts } = props;
    return (
        <>
        <h2 class="">Recent Posts</h2>
        <ul role="list" class="link-card-grid">
            <For each={posts}>
                {post => 
                    <Card 
                    title={post.frontmatter.title} 
                    body={post.frontmatter.description} 
                    href={post.url} 
                    linkTarget=""/>
                }
            </For>
        </ul>
        </>
    );
}