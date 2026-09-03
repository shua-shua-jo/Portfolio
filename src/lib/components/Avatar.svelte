<script lang="ts">
	import { T } from '@threlte/core';
	import { useGltf, useGltfAnimations, OrbitControls } from '@threlte/extras';
	import { asset } from '$app/paths';

	const gltf = useGltf(`${asset('/models/avatar.glb')}`);
	const { actions } = useGltfAnimations<'Walk'>(() => $gltf);

	const walking = $derived($actions?.['Walk']);
	$effect(() => {
		walking?.play();
	});
</script>

<T.PerspectiveCamera makeDefault position={[5, 2, 2]} fov={20}>
	<OrbitControls
		enableZoom={false}
		enableRotate={false}
		enablePan={false}
		enableDamping
		target={[0, 1, 0]}
	/>
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.6} />
<T.DirectionalLight position={[3, 5, 2]} intensity={1} castShadow />

{#await gltf then { scene }}
	<T is={scene} />
{/await}
