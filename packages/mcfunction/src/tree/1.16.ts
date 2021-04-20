import { Tree1_15 } from './1.15'
import type { PartialRootTreeNode } from './type'
import { mergeTree } from './util'

/**
 * Patch for Minecraft: Java Edition 1.16.5
 * 
 * The following parsers are patched with new properties:
 * - `minecraft:resource_location`
 * - `minecraft:uuid`
 */
export const Tree1_16: PartialRootTreeNode = mergeTree(Tree1_15, {
	children: {
		attribute: {
			children: {
				target: {
					children: {
						attribute: {
							properties: {
								category: 'attribute',
							},
							children: {
								modifier: {
									children: {
										add: {
											children: {
												uuid: {
													properties: {
														category: 'attribute_modifier_uuid',
														usageType: 'definition',
													},
												},
											},
										},
										remove: {
											children: {
												uuid: {
													properties: {
														category: 'attribute_modifier_uuid',
													},
												},
											},
										},
										value: {
											children: {
												get: {
													children: {
														uuid: {
															properties: {
																category: 'attribute_modifier_uuid',
															},
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
				},
			},
		},
		locatebiome: {
			children: {
				biome: {
					properties: {
						category: 'worldgen/biome',
					},
				},
			},
		},
	},
})
