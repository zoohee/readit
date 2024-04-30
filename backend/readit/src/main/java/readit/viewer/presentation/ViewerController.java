package readit.viewer.presentation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import readit.auth.dto.AuthCredentials;
import readit.auth.presentation.Auth;
import readit.viewer.application.ViewerService;
import readit.viewer.domain.dto.Word;
import readit.viewer.domain.dto.request.TempSaveRequest;
import readit.viewer.domain.dto.response.WordListResponse;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/viewer")
public class ViewerController {

    private final ViewerService viewerService;

    @GetMapping("/{articleId}")
    public ResponseEntity<WordListResponse> getArticleViewer(@PathVariable Integer articleId) {
        // todo: add auth
        return ResponseEntity.ok(viewerService.loadArticleWithWords(articleId));
    }

    @GetMapping("/word/{word}")
    public ResponseEntity<Word> searchMeaning(@PathVariable String word) {
        // todo: add auth
        return ResponseEntity.ok(viewerService.dictionarySearch(word));
    }

    @PostMapping("/temp/{articleId}")
    public ResponseEntity<Void> saveTemp(@PathVariable Integer articleId,
                                         @RequestBody TempSaveRequest request,
    @Auth AuthCredentials authCredentials) {
        // todo: add memberId
        Integer memberId = authCredentials.id();
        memberId = 1;
        viewerService.saveTemp(articleId, memberId, request);
        return ResponseEntity.ok().build();
    }
}