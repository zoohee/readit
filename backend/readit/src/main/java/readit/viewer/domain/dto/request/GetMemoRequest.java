package readit.viewer.domain.dto.request;

import jakarta.validation.constraints.NotNull;
import readit.viewer.domain.entity.MemberArticle;
import readit.viewer.domain.entity.Memo;

public record GetMemoRequest(
        Integer id,
        String memo
) {
        public static Memo toEntity(GetMemoRequest getMemoRequest, MemberArticle memberArticle){
                return new Memo(
                        null,
                        memberArticle,
                        getMemoRequest.memo()
                );
        }
}
