# feather-svelte Simple library for using (Feather icons)[https://feathericons.com] as components to your Svelte application.

## installation
```bash
npm i feather-svelte
```

## installation
### General usage
```svelte
<script>
    import { Activity } from 'feather-svelte';

    <Activity [props here] />
</script>
```
### Namespaced
```svelte
<script>
    import * as Icon from 'feather-svelte';

    <Icon.Activity [props here] />
</script>
```

## Supported props
<table>
    <tr>
        <th>Prop</th>
        <th>Supported?</th>
    </tr>
    <tr>
        <td>Size</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>Color</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>Stroke width</td>
        <td>No</td>
    </tr>
</table>
