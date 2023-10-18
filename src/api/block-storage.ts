/**
 * Methods for interacting with the block storage endpoints<br>
 * {@link https://www.vultr.com/api/#block}
 * @namespace blockStorage
 */

import { ApiEndpoint } from '../types'

/**
 * List all block storage volumes in the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-blocks}
 * @function listStorages
 * @memberof blockStorage
 * @instance
 */
export const listStorages: ApiEndpoint = {
  url: '/blocks',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
  Create a new block storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/create-block}
 * @function createStorage
 * @memberof blockStorage
 * @instance
 */
export const createStorage: ApiEndpoint = {
  url: '/blocks',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    region: {
      type: 'string',
      required: true
    },
    size_gb: {
      type: 'number',
      required: true
    },
    label: { type: 'string' },
    block_type: { type: 'string' }
  }
}

/**
 * Get information for a specified block storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/get-block}
 * @function getStorage
 * @memberof blockStorage
 * @instance
 */
export const getStorage: ApiEndpoint = {
  url: '/blocks/{block-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'block-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified block storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/delete-block}
 * @function deleteStorage
 * @memberof blockStorage
 * @instance
 */
export const deleteStorage: ApiEndpoint = {
  url: '/blocks/{block-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'block-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update the specified block storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/update-block}
 * @function updateStorage
 * @memberof blockStorage
 * @instance
 */
export const updateStorage: ApiEndpoint = {
  url: '/blocks/{block-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'block-id': {
      type: 'string',
      path: true,
      required: true
    },
    label: { type: 'string' },
    size_gb: { type: 'number' }
  }
}

/**
 * Attach a specified block storage volume to an instance.<br>
 * {@link https://www.vultr.com/api/#operation/attach-block}
 * @function attachStorage
 * @memberof blockStorage
 * @instance
 */
export const attachStorage: ApiEndpoint = {
  url: '/blocks/{block-id}/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'block-id': {
      type: 'string',
      path: true,
      required: true
    },
    instance_id: {
      type: 'string',
      required: true
    },
    live: { type: 'boolean' }
  }
}

/**
 * Detach a block storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/detach-block}
 * @function detachStorage
 * @memberof blockStorage
 * @instance
 */
export const detachStorage: ApiEndpoint = {
  url: '/blocks/{block-id}/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'block-id': {
      type: 'string',
      path: true,
      required: true
    },
    live: { type: 'boolean' }
  }
}
