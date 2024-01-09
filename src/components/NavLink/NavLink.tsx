import { Slot, component$, useContext } from '@builder.io/qwik';
import { Link, type LinkProps } from '@builder.io/qwik-city';
import { ActiveLinkContext, isAutoScrollingContext } from '~/routes';
import styles from './navLink.module.css';

type NavLinkProps = LinkProps & { activeClass?: string };

export const NavLink = component$(({ ...props }: NavLinkProps) => {
  const activeLink = useContext(ActiveLinkContext);
  const isActive = '#' + activeLink.value === props.href;

  const isAutoScrolling = useContext(isAutoScrollingContext);

  return (
    <Link
      class={
        'button' +
        ' ' +
        styles.link +
        (isActive ? ' ' + styles.active : '') +
        (props.class ? ' ' + props.class : '')
      }
      onClick$={() => {
        isAutoScrolling.value = true;
      }}
      {...props}>
      <Slot />
    </Link>
  );
});
