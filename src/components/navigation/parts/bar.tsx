import { Motion } from '@motionone/solid';
import '../navigation.css';
import { spring } from 'motion';

export function Bar() {
   return (
      <p class="instructions">
         <NavItem href='/xp'>/xp</NavItem>
         <NavItem href='/projs'>/projs</NavItem>
         <NavItem href='/test'>/test</NavItem>
         <NavItem href='/blog'>/blog</NavItem>
      </p>
   );
 }


 type NavItemProps = {
   
   /**
    * The href of the link
    */
   href: string;

   /**
    * The text of the link
    */
   children: string;
};
 
/**
 * 
 * @param props provide the href and text of the link
 * @returns styled nav item
 */
 export function NavItem(props: NavItemProps) {
   return (<Motion.code hover={{
      scale: 1.15,
      transition: {
         easing: spring()
      }
      }}><a href={props.href}>{props.children}</a></Motion.code>)
}