import Activity from 'flarum/components/Activity';

/**
 * The `JoinedActivity` component displays an activity feed item for when a user
 * joined the forum.
 */
export default class JoinedActivity extends Activity {
  description() {
    return 'Joined the forum';
  }
}
