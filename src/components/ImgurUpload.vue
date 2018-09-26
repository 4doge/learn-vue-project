<template>
  <div class="file">
    <label class="file-label">
      <input
        class="file-input"
        type="file"
        name="image"
        @change="uploadImage($event.target.files[0])">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          Choose a file…
        </span>
      </span>
    </label>
  </div>
</template>

<script>
import { imgurApiHost, imgurClientId } from '@/config.js';
import http from '@/utils/http.js';

export default {
  name: 'ImgurUpload',
  methods: {
    uploadImage(file) {
      let data = new FormData();
      data.append('image', file);
      let url = `${imgurApiHost}/image`;
      http
        .post(url, data, {
          headers: {
            Authorization: `Client-ID ${imgurClientId}`
          }
        })
        .then(response => {
          this.$emit('input', response.data.data.link);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
