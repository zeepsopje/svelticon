# svelticon
Library for using icon packs as components to your Svelte application.

This is a work in progress. Currently only feather icons is supported.

## Installation
```bash
npm i -D svelticon
```

## Usage
### General usage
```svelte
<script>
    import { Activity } from 'svelticon';

    <Activity [props here] />
</script>
```
### Namespaced
```svelte
<script>
    import * as Icon from 'svelticon';

    <Icon.Activity [props here] />
</script>
```
## Supported icon packs
- [Feather icons](https://feathericons.com)

## Supported props
- `size`
- `color`
