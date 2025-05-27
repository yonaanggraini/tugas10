<template>
    <div class="books-page">
        <BookList :books="filteredBooks" @view-detail="viewDetail" />
    </div>
</template>

<script>
import BookList from '@/components/books/BookList.vue'

export default {
    components: { BookList },
    data() {
        return {
            books: [],
            filteredBooks: []
        }
    },
    async created() {
        this.books = await this.fetchBooks()
        this.filteredBooks = [...this.books]
    },
    methods: {
        async fetchBooks() {
            // API call simulation
            return [
                { id: 1, title: 'Pemrograman Vue.js', author: 'John Doe', category: 'Teknologi' },
                { id: 2, title: 'Seni Desain UI/UX', author: 'Jane Smith', category: 'Desain' }
            ]
        },
        viewDetail(bookId) {
            this.$router.push(/books/${ bookId })
        }
    }
}
</script>